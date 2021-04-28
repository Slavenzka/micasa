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
import Payments from 'Pages/Payments/Payments'
import Citizens from 'Pages/Citizens/Citizens'
import CitizenDetails from 'Pages/CitizenDetails/CitizenDetails'
import Applications from 'Pages/Applications/Applications'
import ApplicationDetails from 'Pages/ApplicationDetails/ApplicationDetails'
import Services from 'Pages/Services/Services'
import ServicesPlumbing from 'Pages/ServicesPlumbing/ServicesPlumbing'
import Blog from 'Pages/Blog/Blog'
import Users from 'Pages/Users/Users'
import Complex from 'Pages/Complex/Complex'
import UserProfile from 'Pages/UserProfile/UserProfile'

export const REGISTER = '/register'
export const LOGIN = '/login'
export const HOME_PAGE = '/'
export const CITIZENS = '/citizens'
export const CITIZEN_DETAILS = '/citizen-details'
export const PAYMENTS = '/payments'
export const APPLICATIONS = '/applications'
export const APPLICATION_DETAILS = '/application-details'
export const SERVICES = '/services'
export const SERVICES_PLUMBING = '/plumbing'
export const BLOG = '/blog'
export const USERS = '/users'
export const USER_PROFILE = '/user-profile'
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
      <Route exact path={PAYMENTS} component={Payments} />
      <Route exact path={CITIZENS} component={Citizens} />
      <Route exact path={`${CITIZEN_DETAILS}/:id`} component={CitizenDetails} />
      <Route exact path={APPLICATIONS} component={Applications} />
      <Route exact path={`${APPLICATION_DETAILS}/:id`} component={ApplicationDetails} />
      <Route exact path={SERVICES} component={Services} />
      <Route exact path={SERVICES_PLUMBING} component={ServicesPlumbing} />
      <Route exact path={BLOG} component={Blog} />
      <Route exact path={USERS} component={Users} />
      <Route exact path={USER_PROFILE} component={UserProfile} />
      <Route exact path={UTILITIES} component={Complex} />
    </Switch>
  )
}

export default Routes
