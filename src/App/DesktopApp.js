import React from 'react'
import classnames from 'classnames'
import css from './DesktopApp.module.scss'
import Routes from 'Pages/Routes'
import SiteGrid from 'components/templates/SiteGrid/SiteGrid'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
import Header from 'components/organisms/Header/Header'
import { useSelector } from 'react-redux'

const DesktopApp = ({history}) => {
  // const isAuthorized = useAuthCheck(history)
  const isAuthorized = true
  const isModalOpen = !!useSelector(store => store.ui.modal.content)

  const hiddenMainHeading = <h1 className={ 'visuallyHidden' }>Віртуальний конс'ерж Micasa</h1>

  const renderContent = () => isAuthorized
    ? (
      <SiteGrid
        className={classnames({
          [css.wrapperBlured]: isModalOpen
        })}
      >
        <>
          <Header className={css.header} />
          <Sidebar
            className={css.sidebar}
          />
          <main className={css.main}>
            { hiddenMainHeading }
            <div className={css.wrapperContent}>
              <Routes />
            </div>
          </main>
        </>
      </SiteGrid>
    )
    : (
      <div
        className={classnames({
          [css.wrapperBlured]: isModalOpen
        })}
      >
        { hiddenMainHeading }
        {/*<Route exact path={REGISTER} render={() => <Login isRegistration />} />*/}
        {/*<Route exact path={LOGIN} component={Login} />*/}
        {/*<Redirect*/}
        {/*  to={{*/}
        {/*    pathname: LOGIN*/}
        {/*  }}*/}
        />
      </div>
    )

  return renderContent()
}

export default DesktopApp
