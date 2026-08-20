/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AiAssistantModal } from './components/AiAssistantModal';

// Views
import { HomePage } from './views/HomePage';
import { ModulesPageView } from './views/ModulesPageView';
import { ModuleDetailView } from './views/ModuleDetailView';
import { MaterialsPageView } from './views/MaterialsPageView';
import { ActivitiesPageView } from './views/ActivitiesPageView';
import { VideosPageView } from './views/VideosPageView';
import { CaseStudiesPageView } from './views/CaseStudiesPageView';
import { ObservationJournalView } from './views/ObservationJournalView';
import { TeacherReflectionView } from './views/TeacherReflectionView';
import { ResourceCenterView } from './views/ResourceCenterView';
import { DashboardView } from './views/DashboardView';
import { AboutPageView } from './views/AboutPageView';
import { AdminCmsView } from './views/AdminCmsView';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'learn':
        return <ModulesPageView />;
      case 'module-detail':
        return <ModuleDetailView />;
      case 'materials':
        return <MaterialsPageView />;
      case 'activities':
        return <ActivitiesPageView />;
      case 'videos':
        return <VideosPageView />;
      case 'case-studies':
        return <CaseStudiesPageView />;
      case 'observation-journal':
        return <ObservationJournalView />;
      case 'teacher-reflection':
        return <TeacherReflectionView />;
      case 'resources':
        return <ResourceCenterView />;
      case 'dashboard':
        return <DashboardView />;
      case 'about':
        return <AboutPageView />;
      case 'admin-cms':
        return <AdminCmsView />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F6] text-[#111111] font-sans antialiased selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="flex-1 w-full pb-16">
        {renderCurrentPage()}
      </main>

      <Footer />

      {/* Global Modals */}
      <GlobalSearchModal />
      <AiAssistantModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
