import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					time="Yesterday at 5PM"
					avatar={faker.image.image()}
					post="Super!"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Alex"
					time="Today at 8PM"
					avatar={faker.image.image()}
					post="Cool!"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Jane"
					time="Yesterday at 10.30PM"
					avatar={faker.image.image()}
					post="Awesome!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
