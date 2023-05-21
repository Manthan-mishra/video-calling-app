import React,{useState} from 'react';
import { EuiFlexGroup, EuiForm, EuiSpacer } from "@elastic/eui";
import Header from '../components/Header';
import useAuth from "../hooks/useAuth";
import MeetingDateField from "../components/FormComponents/MeetingDateField";
import MeetingNameField from "../components/FormComponents/MeetingNameField";
import MeetingUserField from "../components/FormComponents/MeetingUserField";

const OneOnOneMeeting = () => {
    useAuth();

    const [meetingName, setMeetingName] = useState("");
  return (
    <div
    style={{
      display: "flex",
      height: "100vh",
      flexDirection: "column",
    }}
  >
    <Header />
    <EuiFlexGroup justifyContent="center" alignItems="center">
      <EuiForm>
        <MeetingNameField
          label="Meeting name"
          isInvalid={showErrors.meetingName.show}
          error={showErrors.meetingName.message}
          placeholder="Meeting name"
          value={meetingName}
          setMeetingName={setMeetingName}
        />
        <MeetingUserField
          label="Invite User"
          isInvalid={showErrors.meetingUser.show}
          error={showErrors.meetingUser.message}
          options={users}
          onChange={onUserChange}
          selectedOptions={selectedUser}
          singleSelection={{ asPlainText: true }}
          isClearable={false}
          placeholder="Select a User"
        />
        <MeetingDateField selected={startDate} setStartDate={setStartDate} />
        <EuiSpacer />
        <CreateMeetingButtons createMeeting={createMeeting} />
      </EuiForm>
    </EuiFlexGroup>
  </div>
  )
}

export default OneOnOneMeeting;