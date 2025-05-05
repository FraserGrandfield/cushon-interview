import { UserFund } from "~/api";
import ProfileFundCard from "./profile-fund-card";

/**
 * Renders a users funds, how much they have invested and how much its worth
 * 
 * @param { UserFund[] } userFunds of the user 
 * @returns A React element that renders information of the users funds
 */
export default function ProfileFunds({ userFunds }: { userFunds: UserFund[] }) {

    return (
        <div className="grid justify-items-center">
            {userFunds.map((fund, index) => {
                return (
                    <ProfileFundCard key={ `fund-card-${index}` } userFund={ fund }/>
                )
            })}
        </div>
    )
}