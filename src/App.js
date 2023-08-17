// https://reqres.in/api/users
import React from "react"
import Users from "./components/user/Index";
import Confirm from "./components/confirm/Confirm";
function App() {

  const [users, setUsers] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')
  const [invite, setInvite] = React.useState([])
  const [confirm, setConfirm] = React.useState(false)

  React.useEffect(() => {
    fetch('https://reqres.in/api/users?delay=.1')
      .then(res => res.json())
      .then(json => setUsers(json.data))
      // .catch(err => {
      //   console.warn(err)
      //   alert('Error loading users')
      // })
      .finally(() => setLoading(false))
  }, []
  )

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invite.includes(id)) {
      setInvite(prev => prev.filter(_id => _id != id))
    } else {
      setInvite(prev => [...prev, id])
    }
  }

  const sendInviteClickButton = () => {
    setConfirm(true)
    console.log('hello');
  }

  return (
    <div className="App">
      {
        confirm ?
          <Confirm count={invite.length}/> :
          <Users
            changeSearchValue={changeSearchValue}
            items={users}
            isLoading={isLoading}
            searchValue={searchValue}
            onClickInvite={onClickInvite}
            invite={invite}
            sendInviteClickButton={sendInviteClickButton}
          />

      }


    </div>

  );
}

export default App;

