import React from 'react'
import Home from './Components/Home/Home'
import SubjectArabic from './Components/SubjectArabic/SubjectArabic'
import SubjectReligion from './Components/SubjectReligion/SubjectReligion'
import Selectedarabic from './Components/Selectedarabic/Selectedarabic'
import Selectedreligion from './Components/Selectedreligion/Selectedreligion'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import LoginPage from './Components/LoginPage/LoginPage'
import SignUp from './Components/SignUp/SignUp'
import ClassroomArabic from './Components/ClassroomArabic/ClassroomArabic'
import YourProfile from './Components/YourProfile/YourProfile'
import Calendar from './Components/Calendar/Calendar'
import TeacherClassR1 from './Components/TeacherClassR1/TeacherClassR1'
import TeacherClassR2 from './Components/TeacherClassR2/TeacherClassR2'
import TeacherClassR3 from './Components/TeacherClassR3/TeacherClassR3'
import AdminPage from './Components/AdminPage/AdminPage'
import Account from './Components/Account/Account'
import AttendanceAdmin from './Components/AdminPage/AttendanceAdmin'
import TestesAdmin from './Components/AdminPage/TestesAdmin'

let routers = createBrowserRouter([
  
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'SubjectArabic', element: <SubjectArabic /> },
      { path: 'SubjectReligion', element: <SubjectReligion /> },
      { path: 'Selectedarabic', element: <Selectedarabic /> },
      { path: 'Selectedreligion', element: <Selectedreligion /> },
      { path: 'LoginPage', element: <LoginPage /> },
      { path: 'SignUp', element: <SignUp /> },
      { path: 'ClassroomArabic', element: <ClassroomArabic /> },
      { path: 'YourProfile', element: <YourProfile /> },
      { path: 'Home', element: <Home /> },
      { path: 'TeacherClassR1', element: <TeacherClassR1 /> },
      { path: 'TeacherClassR2', element: <TeacherClassR2 /> },
      { path: 'TeacherClassR3', element: <TeacherClassR3 /> },
      { path: 'AdminPage', element: <AdminPage /> },
      { path: 'Account', element: <Account /> },
      { path: 'AttendanceAdmin',element: <AttendanceAdmin/>},
      { path: 'TestesAdmin',element: <TestesAdmin/>},

    ]
  }

])

export default function App() {
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
