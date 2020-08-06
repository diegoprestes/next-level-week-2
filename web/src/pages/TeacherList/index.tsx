import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffys.">
        <form id="search-teachers">
        <Select
            name="subject"
            label="Subject"
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Math', label: 'Math' },
              { value: 'History', label: 'History' },
              { value: 'Geography', label: 'Geography' },
              { value: 'Chemistry', label: 'Chemistry' },
              { value: 'Physics', label: 'Physics' },
            ]}
          />
          <Select
            name="week_day"
            label="Week Day"
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />
          <Input name="time" label="Hour" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;