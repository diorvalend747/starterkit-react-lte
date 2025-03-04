import { ContentHeader } from '../../../components';

const Icons = () => {
  return (
    <div className='content'>
      <ContentHeader title='Icons' />
      <section className='content'>
        <div className='container-fluid'>
          <div className='card card-primary card-outline'>
            <div className='card-header'>
              <h3 className='card-title'>Icons</h3>
            </div>{' '}
            <div className='card-body'>
              <p>You can use any font library you like with AdminLTE 3.</p>
              <strong>Recommendations</strong>
              <div>
                <a href='https://fontawesome.com/'>Font Awesome</a>
                <br />
                <a href='https://useiconic.com/open/'>Iconic Icons</a>
                <br />
                <a href='https://ionicons.com/'>Ion Icons</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Icons;
