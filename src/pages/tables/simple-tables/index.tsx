import { ContentHeader } from '../../../components';

const SimpleTables = () => {
  return (
    <div className='content'>
      <ContentHeader title='Simple Tables' />

      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Bordered Table</h3>
                </div>

                <div className='card-body'>
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar progress-bar-danger'
                              style={{ width: '55%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-danger'>55%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar bg-warning'
                              style={{ width: '70%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-warning'>70%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-primary'
                              style={{ width: '30%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-primary'>30%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-success'
                              style={{ width: '90%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-success'>90%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
                <div className='card-footer clearfix'>
                  <ul className='pagination pagination-sm m-0 float-right'>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        «
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        »
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.card */}
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Condensed Full Width Table</h3>
                </div>
                {/* /.card-header */}
                <div className='card-body p-0'>
                  <table className='table table-sm'>
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar progress-bar-danger'
                              style={{ width: '55%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-danger'>55%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar bg-warning'
                              style={{ width: '70%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-warning'>70%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-primary'
                              style={{ width: '30%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-primary'>30%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-success'
                              style={{ width: '90%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-success'>90%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Simple Full Width Table</h3>
                  <div className='card-tools'>
                    <ul className='pagination pagination-sm float-right'>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          «
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          1
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          2
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          3
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.card-header */}
                <div className='card-body p-0'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar progress-bar-danger'
                              style={{ width: '55%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-danger'>55%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar bg-warning'
                              style={{ width: '70%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-warning'>70%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-primary'
                              style={{ width: '30%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-primary'>30%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-success'
                              style={{ width: '90%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-success'>90%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Striped Full Width Table</h3>
                </div>
                {/* /.card-header */}
                <div className='card-body p-0'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar progress-bar-danger'
                              style={{ width: '55%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-danger'>55%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className='progress progress-xs'>
                            <div
                              className='progress-bar bg-warning'
                              style={{ width: '70%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-warning'>70%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-primary'
                              style={{ width: '30%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-primary'>30%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className='progress progress-xs progress-striped active'>
                            <div
                              className='progress-bar bg-success'
                              style={{ width: '90%' }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className='badge bg-success'>90%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Responsive Hover Table</h3>
                  <div className='card-tools'>
                    <div
                      className='input-group input-group-sm'
                      style={{ width: 150 }}
                    >
                      <input
                        type='text'
                        name='table_search'
                        className='form-control float-right'
                        placeholder='Search'
                      />
                      <div className='input-group-append'>
                        <button type='submit' className='btn btn-default'>
                          <i className='fas fa-search' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className='card-body table-responsive p-0'>
                  <table className='table table-hover text-nowrap'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-success'>Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>219</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-warning'>Pending</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>657</td>
                        <td>Bob Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-primary'>Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-danger'>Denied</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          {/* /.row */}
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Fixed Header Table</h3>
                  <div className='card-tools'>
                    <div
                      className='input-group input-group-sm'
                      style={{ width: 150 }}
                    >
                      <input
                        type='text'
                        name='table_search'
                        className='form-control float-right'
                        placeholder='Search'
                      />
                      <div className='input-group-append'>
                        <button type='submit' className='btn btn-default'>
                          <i className='fas fa-search' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div
                  className='card-body table-responsive p-0'
                  style={{ height: 300 }}
                >
                  <table className='table table-head-fixed text-nowrap'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-success'>Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>219</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-warning'>Pending</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>657</td>
                        <td>Bob Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-primary'>Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-danger'>Denied</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>134</td>
                        <td>Jim Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-success'>Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>494</td>
                        <td>Victoria Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-warning'>Pending</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>832</td>
                        <td>Michael Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-primary'>Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr>
                        <td>982</td>
                        <td>Rocky Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className='tag tag-danger'>Denied</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          {/* /.row */}
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Expandable Table</h3>
                </div>
                {/* ./card-header */}
                <div className='card-body'>
                  <table className='table table-bordered table-hover'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='true'>
                        <td>219</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>Pending</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='true'>
                        <td>657</td>
                        <td>Alexander Pierce</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>175</td>
                        <td>Mike Doe</td>
                        <td>11-7-2014</td>
                        <td>Denied</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>134</td>
                        <td>Jim Doe</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>494</td>
                        <td>Victoria Doe</td>
                        <td>11-7-2014</td>
                        <td>Pending</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>832</td>
                        <td>Michael Doe</td>
                        <td>11-7-2014</td>
                        <td>Approved</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='false'>
                        <td>982</td>
                        <td>Rocky Doe</td>
                        <td>11-7-2014</td>
                        <td>Denied</td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td colSpan={5}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          {/* /.row */}
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-header'>
                  <h3 className='card-title'>Expandable Table Tree</h3>
                </div>
                {/* ./card-header */}
                <div className='card-body p-0'>
                  <table className='table table-hover'>
                    <tbody>
                      <tr>
                        <td className='border-0'>183</td>
                      </tr>
                      <tr data-widget='expandable-table' aria-expanded='true'>
                        <td>
                          <i className='expandable-table-caret fas fa-caret-right fa-fw' />
                          219
                        </td>
                      </tr>
                      <tr className='expandable-body'>
                        <td>
                          <div className='p-0'>
                            <table className='table table-hover'>
                              <tbody>
                                <tr
                                  data-widget='expandable-table'
                                  aria-expanded='false'
                                >
                                  <td>
                                    <i className='expandable-table-caret fas fa-caret-right fa-fw' />
                                    219-1
                                  </td>
                                </tr>
                                <tr className='expandable-body'>
                                  <td>
                                    <div className='p-0'>
                                      <table className='table table-hover'>
                                        <tbody>
                                          <tr>
                                            <td>219-1-1</td>
                                          </tr>
                                          <tr>
                                            <td>219-1-2</td>
                                          </tr>
                                          <tr>
                                            <td>219-1-3</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  data-widget='expandable-table'
                                  aria-expanded='false'
                                >
                                  <td>
                                    <button
                                      type='button'
                                      className='btn btn-primary p-0'
                                    >
                                      <i className='expandable-table-caret fas fa-caret-right fa-fw' />
                                    </button>
                                    219-2
                                  </td>
                                </tr>
                                <tr className='expandable-body'>
                                  <td>
                                    <div className='p-0'>
                                      <table className='table table-hover'>
                                        <tbody>
                                          <tr>
                                            <td>219-2-1</td>
                                          </tr>
                                          <tr>
                                            <td>219-2-2</td>
                                          </tr>
                                          <tr>
                                            <td>219-2-3</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>219-3</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>657</td>
                      </tr>
                      <tr>
                        <td>175</td>
                      </tr>
                      <tr>
                        <td>134</td>
                      </tr>
                      <tr>
                        <td>494</td>
                      </tr>
                      <tr>
                        <td>832</td>
                      </tr>
                      <tr>
                        <td>982</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleTables;
