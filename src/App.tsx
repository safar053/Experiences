import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'
import {getRoutes} from './routes'

import {Toaster} from 'react-hot-toast'

import './i18n'

const routeArr = Object.values(getRoutes())

function App() {
    return (
        <>
            <Toaster position="top-right" />

            <Router>
                <Routes>
                    {routeArr.map((item) => (
                        <Route
                            path={item.path}
                            key={item.path}
                            element={
                                <MainLayout title={item.title}>
                                    <item.component />
                                </MainLayout>
                            }
                        />
                    ))}
                </Routes>
            </Router>
        </>
    )
}

export default App
