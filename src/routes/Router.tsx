import { Routes, Route } from 'react-router'

// Pages
import Homepage from './home/Homepage'
import Dashboard from './dashboard/Dashboard'
import NotFound from './NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={<Loader />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
