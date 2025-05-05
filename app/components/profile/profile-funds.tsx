import { UserFund } from "~/api";
import ProfileFund from "./profile-fund";


export default function ProfileFunds({ userFunds }: { userFunds: UserFund[] }) {

    return (
        <div className="grid justify-items-center">
            {userFunds.map(fund => {
                return (
                    <ProfileFund userFund={ fund }/>
                )
            })}
        </div>
    )
}