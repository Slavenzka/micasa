import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import IconPayments from 'assets/icons/IconPayments'
import IconDashboard from 'assets/icons/IconDashboard'
import IconCitizens from 'assets/icons/IconCitizens'
import IconApplications from 'assets/icons/IconApplications'
import IconServices from 'assets/icons/IconServices'
import IconBlog from 'assets/icons/IconBlog'
import IconUsers from 'assets/icons/IconUsers'
import IconUtilities from 'assets/icons/IconUtilities'

export const REGISTER = '/register'
export const LOGIN = '/login'
export const HOME_PAGE = '/'
export const CITIZENS = '/citizens'
export const PAYMENTS = '/payments'
export const APPLICATIONS = '/applications'
export const SERVICES = '/services'
export const BLOG = '/blog'
export const USERS = '/users'
export const UTILITIES = '/utilities'

export const SIDEBAR_LIST = [
  {
    label: 'Головна',
    url: '/',
    icon: <IconDashboard className={ `iconSidebar` } />
  },
  {
    label: 'Мешканцi',
    url: CITIZENS,
    icon: <IconCitizens className={ `iconSidebar` } />
  },
  {
    label: 'Платежi',
    url: PAYMENTS,
    icon: <IconPayments className={ `iconSidebar` } />
  },
  {
    label: 'Звернення',
    url: APPLICATIONS,
    icon: <IconApplications className={ `iconSidebar` } />
  },
  {
    label: 'Сервiси',
    url: SERVICES,
    icon: <IconServices className={ `iconSidebar` } />
  },
  {
    label: 'Блог',
    url: BLOG,
    icon: <IconBlog className={ `iconSidebar` } />
  },
  {
    label: 'Користувачi',
    url: USERS,
    icon: <IconUsers className={ `iconSidebar` } />
  },
  {
    label: 'ЖК',
    url: UTILITIES,
    icon: <IconUtilities className={ `iconSidebar` } />
  },
]

// TODO apply async import of page components to split the initial js chunk
const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME_PAGE} component={Home} />
    </Switch>
  )
}

export default Routes
