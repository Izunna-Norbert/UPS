// Icon component
import React from "react";
import { Wallet, Settings, Profile, Trxn } from "../../assets";

export const Icon = ({ name, focused }: any) => {
    switch (name) {
        case "wallet":
        return focused ? <Wallet /> : <Wallet />;
        case "transaction":
        return focused ? <Trxn /> : <Trxn />;
        case "profile":
        return focused ? <Profile /> : <Profile />;
        case "settings":
        return focused ? <Settings /> : <Settings />;
        default:
        return <Wallet />;
    }
};