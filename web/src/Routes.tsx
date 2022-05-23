import { Router, Route, Set, Private } from '@redwoodjs/router'
import DomainsLayout from 'src/layouts/DomainsLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/domain/{id}" page={DomainDetailPage} name="domainDetail" />
      <Private unauthenticated="home">
        <Set wrap={DomainsLayout}>
          <Route path="/admin/domains/new" page={DomainNewDomainPage} name="newDomain" />
          <Route path="/admin/domains/{id}/edit" page={DomainEditDomainPage} name="editDomain" />
          <Route path="/admin/domains/{id}" page={DomainDomainPage} name="domain" />
          <Route path="/admin/domains" page={DomainDomainsPage} name="domains" />
        </Set>
      </Private>
      <Set wrap={DashboardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
