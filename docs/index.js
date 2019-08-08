function openProcessWindow(url, id) {
  const event = new CustomEvent('spe:open', { detail: { url, id } });
  document.dispatchEvent(event);
}

function closeProcessWindow(id) {
  const event = new CustomEvent('spe:close', { detail: { id } });
  document.dispatchEvent(event);
}

document.addEventListener('spe:closed', event => {
  const { id } = event.detail;
  console.log('closed ' + id);
});

document.addEventListener('spe:select', event => {
  const { id, actionId, taskId } = event.detail;
  console.log('select ' + id, actionId, taskId);
});

function openClientPage(id) {
  window.open(`/sante-cs-tabs-test/client-${id}?CustomerId=${id}`, id);
}
