{/* {section === 3 && (
          <form className="reg-form">
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Member Name"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Member Email"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Member Mobile"
                type="text"
              />
            </div>
            {AddButtonDisplay(numInputs)}
            <div className="button-bar">
            <div>
                <button className="btn" onClick={handleBackButtonClick}>B a c k</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextButtonClick}>N e x t</button>
              </div>
          </div>
          </form>
        )}

        {section === 4 && (
          <form className="reg-form">
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Transaction ID"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control"
                placeholder="UPI ID"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control img-input"
                placeholder="Upload Image"
                type="file"
              />
            </div>
            <div className="button-bar">
            <div>
                <button className="btn" onClick={handleBackButtonClick}>B a c k</button>
              </div>
              <div>
                <button className="btn" onClick={handleSubmitButtonClick}>Submit</button>
              </div>
          </div>
          </form>
        )} */}




        {/* const [numInputs, setNumInputs] = useState(1);

  const handleAddInput = () => {
      setNumInputs(numInputs + 1);
  };

  const AddButtonDisplay = () => {
    const max = 3;
    if (numInputs < max) {
      return (
        <div className="addButnContainer">
          <button className="addButton" type="button" onClick={handleAddInput}>Add +</button>
        </div>
      );
    }
  } */}


<div className="custom-mem-bg kard-memb">
                    <form className="members-form">
                        <div>Add members</div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Name"
                            type="text"
                            name="memberName"
                            value={memberFormData.memberName}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberName}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Email"
                            type="email"
                            name="memberEmail"
                            value={memberFormData.memberEmail}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberEmail}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Phone"
                            type="number"
                            name="memberPhone"
                            value={memberFormData.memberPhone}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberPhone}</p>
                        </div>
                        <div className="button-bar">
                            <div>
                            <button className="btn">S u b m i t</button>
                            </div>
                        </div>
                    </form>
                </div>








<h1 className="">Member Details</h1>
                <div>
                <div className="custom-mem-bg kard-memb">
                    <form className="members-form">
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Name"
                            type="text"
                            name="memberName"
                            value={memberFormData.memberName}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberName}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Email"
                            type="email"
                            name="memberEmail"
                            value={memberFormData.memberEmail}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberEmail}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Phone"
                            type="number"
                            name="memberPhone"
                            value={memberFormData.memberPhone}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberPhone}</p>
                        </div>
                        <div className="button-bar">
                            <div>
                            <button className="btn">S u b m i t</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>


//getTeam Details
{
  "success": true,
  "team": {
      "id": "53e1ecef-3869-4c88-a58c-d9e70dbc628d",
      "teamName": "Astraxx",
      "leaderId": "74fcfc1d-e93d-4130-9ed7-b080c4c5b9dd",
      "githubLink": null,
      "paymentPic": null,
      "payStatus": false,
      "members": [
          {
              "id": "b3af978b-1312-4a72-b2cb-3052b94062bb",
              "name": "Janesh Walia",
              "email": "gamep3326@gmail.com",
              "phoneNumber": "6366253289",
              "teamId": "53e1ecef-3869-4c88-a58c-d9e70dbc628d"
          }
      ],
      "leader": {
          "name": "Gagan S",
          "email": "gagan200254@gmail.com",
          "phoneNumber": "9008243280"
      }
  }
}

//After a mem is added
{
  "success": true,
  "message": "Member Added Succesfully!",
  "member": {
      "id": "b3af978b-1312-4a72-b2cb-3052b94062bb",
      "name": "Janesh Walia",
      "email": "gamep3326@gmail.com",
      "phoneNumber": "6366253289",
      "teamId": "53e1ecef-3869-4c88-a58c-d9e70dbc628d"
  }
}