import React from 'react';
import Feedback from '../../../modules/assessment/component/Feedback';
import MainLayout from '../../../components/Layout/MainLayout';

const feedback = () => {
  return (
    <MainLayout activePage="dashbord" showTopbar showFooter showDashboardSidebar={false}>
      <Feedback />
    </MainLayout>
  );
};

export default feedback;
