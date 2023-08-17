import Button from "../Button"

function Confirm({count}) {
    return (
        <div className="wrapper">

            <svg
                className='green-check' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="1.224"><g id="SVGRepo_bgCarrier" stroke='#2bb576idth="0"' transform="translate(1.92,1.92), scale(0.84)"><rect x="0" y="0" width="24.00" height="24.00" rx="12" fill="#2BB576" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12.3333L10.4615 15L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></g>
            </svg>

            <h2 className="invite-title">Successful!</h2>

            <p className="invite-text">All {count} invitations have been sent.</p>

            <Button value={'Back'} />

        </div>
    )

}

export default Confirm