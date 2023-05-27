import { FormFeedback } from './Statistics/Statistics';
import {stats} from '../json';

export const App = () => {
  return (
    <div className='container'>
      <FormFeedback stats={stats} title="Upload stats" />
    </div>
  );
};