import { createEffect } from 'effector';
import { createStore, sample } from 'effector';
import { createEvent } from 'effector';
 
export const clientBet = createEvent<number>()
export const clientReward = createEvent<number>()
export const updateBalance = createEvent<number>()

export const $balance = createStore<number>(999999)

sample({
    clock: updateBalance,
    target: $balance
})

sample({
    clock: clientBet,
    source: $balance,
    fn: (balance, bet) => (balance - bet),
    target: $balance
})

sample({
    clock: clientReward,
    source: $balance,
    fn: (balance, reward) => (balance + reward),
    target: $balance
})