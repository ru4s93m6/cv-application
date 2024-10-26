import { useReducer, useState } from "react";
import UserProvider, { useUser } from "./contexts/UserProvider";
import ExperienceProvider from "./contexts/ExperienceProvider";
import EducationProvider from "./contexts/EducationProvider";
import AppLayout from "./ui/AppLayout";
import UserForm from "./components/user/UserForm";
import EducationList from "./components/education/EducationList";
import ExperienceList from "./components/experience/ExperienceList";
import Sidebar from "./ui/Sidebar";
import Resume from "./ui/Resume";

function App() {
  return (
    <UserProvider>
      <ExperienceProvider>
        <EducationProvider>
          <AppLayout>
            <Sidebar>
              <UserForm />
              <EducationList />
              <ExperienceList />
            </Sidebar>
            <Resume></Resume>
          </AppLayout>
        </EducationProvider>
      </ExperienceProvider>
    </UserProvider>
  );
}

export default App;
