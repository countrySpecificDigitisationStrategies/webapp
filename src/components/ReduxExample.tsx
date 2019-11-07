import React from 'react';
import { connect } from 'react-redux';
import { sampleAction } from '../store/actions';
import { Dispatch } from 'redux';

const ReduxExample = (): JSXElement => (
    <>
        <ConnectedActionTriggers />
        <ConnectedStoreDisplay />
    </>
);

/** Trigger a sample action in the store */
type ActionTriggersProps = { onButtonClick: onButtonClickFn };
const ActionTriggers = ({ onButtonClick }: ActionTriggersProps): JSXElement => (
    <>
        <button onClick={(): void => onButtonClick('foo')}>Foo</button>
        <button onClick={(): void => onButtonClick('bar')}>Bar</button>
    </>
);

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): ActionTriggersProps => {
    return {
        onButtonClick: (text: string): string => {
            dispatch(sampleAction(text));
        },
    };
};

const ConnectedActionTriggers: JSXElement = connect(
    null,
    mapDispatchToProps,
)(ActionTriggers);

/** Display what is currently in the store */
type StoreDisplayProps = { text: string };
const StoreDisplay = ({ text }: StoreDisplayProps): JSXElement => <div>Store says: {text}</div>;

const mapStateToProps = (state: object): StoreDisplayProps => ({
    text: state.sampleReducer.text,
});

const ConnectedStoreDisplay: JSXElement = connect(mapStateToProps)(StoreDisplay);

export default ReduxExample;
