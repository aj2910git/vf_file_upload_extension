window.FileUploadExtension = {
  name: 'extor_file_upload',
  type: 'response',
  match: () => true,
  render: ({ element }) => {
    element.innerHTML = "<div>Extension loaded!</div>";
  }
};
