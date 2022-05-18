import { Router, Route, Set } from '@redwoodjs/router'
import DomainsLayout from 'src/layouts/DomainsLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DomainsLayout}>
        <Route path="/domain/{id}" page={DomainDetailPage} name="domainDetail" />
        <Route path="/domains/new" page={DomainNewDomainPage} name="newDomain" />
        <Route path="/domains/{id}/edit" page={DomainEditDomainPage} name="editDomain" />
        <Route path="/domains/{id}" page={DomainDomainPage} name="domain" />
        <Route path="/domains" page={DomainDomainsPage} name="domains" />
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
