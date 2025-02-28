// import { useEffect } from 'react';
// import $ from 'jquery';
// import 'summernote/dist/summernote-bs4.css';
// import 'summernote/dist/summernote-bs4.min.js';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/monokai.css';
// import 'codemirror/mode/javascript/javascript.js';
// import 'codemirror/mode/xml/xml.js';
// import 'codemirror/mode/htmlmixed/htmlmixed.js';
// import 'codemirror/lib/codemirror.js';

const Editors = () => {
  // useEffect(() => {
  //   $('#summernote').summernote({
  //     height: 300,
  //   });

  //   const codeMirrorElement = document.getElementById('codeMirrorDemo');
  //   if (codeMirrorElement) {
  //     window.CodeMirror.fromTextArea(codeMirrorElement, {
  //       mode: 'htmlmixed',
  //       theme: 'monokai',
  //       lineNumbers: true,
  //     });
  //   }
  // }, []);

  return (
    <div className='content-wrapper'>
      {/* Content Header (Page header) */}
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Text Editors</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='breadcrumb-item active'>Text Editors</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className='content'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card card-outline card-info'>
              <div className='card-header'>
                <h3 className='card-title'>Summernote</h3>
              </div>
              {/* /.card-header */}
              <div className='card-body'>
                <textarea
                  id='summernote'
                  defaultValue={
                    '                Place <em>some</em> <u>text</u> <strong>here</strong>\n              '
                  }
                />
              </div>
              <div className='card-footer'>
                Visit{' '}
                <a href='https://github.com/summernote/summernote/'>
                  Summernote
                </a>{' '}
                documentation for more examples and information about the
                plugin.
              </div>
            </div>
          </div>
          {/* /.col*/}
        </div>
        {/* ./row */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='card card-outline card-info'>
              <div className='card-header'>
                <h3 className='card-title'>CodeMirror</h3>
              </div>
              {/* /.card-header */}
              <div className='card-body p-0'>
                <textarea
                  id='codeMirrorDemo'
                  className='p-3'
                  defaultValue={
                    '<div class="info-box bg-gradient-info">\n  <span class="info-box-icon"><i class="far fa-bookmark"></i></span>\n  <div class="info-box-content">\n    <span class="info-box-text">Bookmarks</span>\n    <span class="info-box-number">41,410</span>\n    <div class="progress">\n      <div class="progress-bar" style="width: 70%"></div>\n    </div>\n    <span class="progress-description">\n      70% Increase in 30 Days\n    </span>\n  </div>\n</div>\n              '
                  }
                />
              </div>
              <div className='card-footer'>
                Visit <a href='https://codemirror.net/'>CodeMirror</a>{' '}
                documentation for more examples and information about the
                plugin.
              </div>
            </div>
          </div>
          {/* /.col*/}
        </div>
        {/* ./row */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default Editors;
