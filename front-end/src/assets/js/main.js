const API_URL = "https://mini-projeto-m2-b1wr.onrender.com/tarefas";

const taskList = document.getElementById("taskList");
const form = document.getElementById("taskForm");

function statusColor(status) {
  if (status === "concluída") return "#22c55e";
  if (status === "em andamento") return "#38bdf8";
  return "#f59e0b";
}

// ================= GET
async function loadTasks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error();

    const tasks = await res.json();
    taskList.innerHTML = "";

    tasks.forEach(task => {
      const article = document.createElement("article");

      const title = document.createElement("h3");
      title.textContent = task.titulo;

      const desc = document.createElement("p");
      desc.textContent = task.descricao || "";

      const infoDiv = document.createElement("div");
      infoDiv.className = "task-info";
      infoDiv.append(title, desc);

      const select = document.createElement("select");
      select.className = "status-select";
      select.style.color = statusColor(task.status);

      ["a fazer", "em andamento", "concluída"].forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        if (status === task.status) option.selected = true;
        select.appendChild(option);
      });

      select.addEventListener("change", e => {
        updateStatus(task.id, e.target.value);
      });

      const btnDelete = document.createElement("button");
      btnDelete.className = "btn-delete";
      btnDelete.textContent = "Excluir";
      btnDelete.addEventListener("click", () => deleteTask(task.id));

      infoDiv.appendChild(select);
      article.append(infoDiv, btnDelete);
      taskList.appendChild(article);
    });

  } catch {
    taskList.innerHTML = "<p>Erro ao conectar com a API.</p>";
  }
}

// ================= POST
form.addEventListener("submit", async e => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo, descricao })
  });

  form.reset();
  loadTasks();
});

// ================= PATCH STATUS
async function updateStatus(id, status) {
  await fetch(`${API_URL}/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  loadTasks();
}

// ================= DELETE
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTasks();
}

loadTasks();
