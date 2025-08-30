import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocenteListPage } from "../docentes/pages/DocenteListPage";
import  LoginPage  from "../auth/pages/LoginPage";
import { DocenteFormPage } from "../docentes/pages/DocenteFormPage";
import { ProtectedRoute } from "../auth/components/ProtectedRoute";


export const AppRoutes = () => {
  return (

<BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
       
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DocenteListPage />
            </ProtectedRoute>
          }
        />


        {/*protegido */}  
        <Route path="/docentes" element={
            <ProtectedRoute>
                     <DocenteListPage />
            </ProtectedRoute> } />


        <Route path="/docentes/new" element={ 
            <ProtectedRoute>
                     <DocenteFormPage />
            </ProtectedRoute>} />


        <Route path="/docente/edit/:id" element={
             <ProtectedRoute>
                       <DocenteFormPage />
             </ProtectedRoute>}>
        
        
        
        </Route>


      </Routes>
    </BrowserRouter>

  );
};
