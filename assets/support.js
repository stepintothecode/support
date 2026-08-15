// Greets the visitor by the project that sent them. Reads PROJECTS from
// projects.js, which the page loads first.
//
// Unknown ?from= values are ignored rather than shown, so a stale or
// hand-typed one can never put text on the page.
(function () {
  const project = PROJECTS[new URLSearchParams(location.search).get('from')];
  if (!project) return;

  document.getElementById('from').textContent = `Glad ${project.name} was useful.`;
  document.getElementById('freeLine').textContent = `${project.name} is free and stays free.`;

  const back = document.getElementById('back');
  back.href = project.home;
  back.textContent = `Back to ${project.name} ›`;
  back.hidden = false;
})();
