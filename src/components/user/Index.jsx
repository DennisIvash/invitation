import Search from "../Search"
import User from "./User"
import Button from "../Button"
import { Skeleton } from "./Skeleton"

export default function Users({ items, isLoading, searchValue, changeSearchValue, invite, onClickInvite, sendInviteClickButton }) {
    return (
        <div className="wrapper">
            <Search changeSearchValue={changeSearchValue} searchValue={searchValue} />
            {
                isLoading ?
                    <div>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />

                    </div> :

                    <ul>
                        {
                            items.filter(obj => {
                                const fullName = obj.first_name + obj.last_name
                                if (fullName.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.includes(searchValue)) {
                                    return true
                                }
                            })
                                .map(obj => <User
                                    isInvited={invite.includes(obj.id)}
                                    onClickInvite={onClickInvite} {...obj} key={obj.id} />)
                        }
                    </ul>

                }

            {invite.length > 0 &&

                <Button sendInviteClickButton={sendInviteClickButton} value={'Send Invite'} />
            }
        </div>
    )
}