import { ContentHeader } from '../../../components';

const ValidationForm = () => {
  return (
    <div className='content'>
      <ContentHeader title='Validation' />
      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card card-primary'>
                <div className='card-header'>
                  <h3 className='card-title'>
                    Quick Example <small>jQuery Validation</small>
                  </h3>
                </div>

                <form id='quickForm'>
                  <div className='card-body'>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>Email address</label>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        placeholder='Enter email'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Password</label>
                      <input
                        type='password'
                        name='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Password'
                      />
                    </div>
                    <div className='form-group mb-0'>
                      <div className='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          name='terms'
                          className='custom-control-input'
                          id='exampleCheck1'
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='exampleCheck1'
                        >
                          I agree to the <a href='#'>terms of service</a>.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='card-footer'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className='col-md-6'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValidationForm;
