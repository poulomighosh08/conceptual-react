import { all } from 'redux-saga/effects';
import logsSaga from './logs/logsSaga';

export default function* rootSaga() {
  yield all([logsSaga()]);
}
