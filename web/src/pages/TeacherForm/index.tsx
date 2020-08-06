import React, { useState, FormEvent } from "react";

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((item, itemIndex) => {
      if (index === itemIndex) {
        return { ...item, [field]: value };
      }

      return item;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    api.post("classes", {
      name,
      avatar,
      whatsapp,
      bio,
      cost: Number(cost),
      subject,
      schedule: scheduleItems,
    }).then(() => {
      alert('Register completed');

      history.push('/');
    }).catch(() => {
      alert('Error, try again later');
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="That's awesome that you want to give classes."
        description="The first step is to fill out this registration form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>

            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(event) => {
                setAvatar(event.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(event) => {
                setWhatsapp(event.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(event) => {
                setBio(event.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

            <Select
              name="subject"
              label="Subject"
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Biology", label: "Biology" },
                { value: "Math", label: "Math" },
                { value: "History", label: "History" },
                { value: "Geography", label: "Geography" },
                { value: "Chemistry", label: "Chemistry" },
                { value: "Physics", label: "Physics" },
              ]}
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            />
            <Input
              name="cost"
              label="Cost of your hour per class"
              value={cost}
              onChange={(event) => {
                setCost(event.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available Hours
              <button type="button" onClick={addNewScheduleItem}>
                + New time
              </button>
            </legend>

            {scheduleItems.map((item, index) => (
              <div key={index} className="schedule-item">
                <Select
                  name="week_day"
                  label="Week Day"
                  value={item.week_day}
                  onChange={(event) =>
                    setScheduleItemValue(index, "week_day", event.target.value)
                  }
                  options={[
                    { value: "0", label: "Sunday" },
                    { value: "1", label: "Monday" },
                    { value: "2", label: "Tuesday" },
                    { value: "3", label: "Wednesday" },
                    { value: "4", label: "Thursday" },
                    { value: "5", label: "Friday" },
                    { value: "6", label: "Saturday" },
                  ]}
                />
                <Input
                  name="from"
                  label="From"
                  type="time"
                  value={item.from}
                  onChange={(event) =>
                    setScheduleItemValue(index, "from", event.target.value)
                  }
                />
                <Input
                  name="to"
                  label="To"
                  type="time"
                  value={item.to}
                  onChange={(event) =>
                    setScheduleItemValue(index, "to", event.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Important warning" />
              Important! <br />
              Fill out all fields
            </p>
            <button type="submit">Save</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
