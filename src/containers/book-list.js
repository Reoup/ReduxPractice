import React, {Component} from 'react'; // 컴포넌트
import { connect } from 'react-redux'; // react와 redux를 연결해줌
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; 

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title}
                </li> // 해당 키는 유니크한 값이어야 하기 때문
            ) 
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){ 
    // Whatever is returned will show up as props
    // inside of BookList
    return{
        books: state.books
    };
}


//Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch); // 구체적으로 이 selectBook으로 부터 반환값을 받아 리듀서로 흐르게 만드는 것
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); // connect 함수는 이 컴포넌트를 가져오고 mapStateToProps 를 가져와, 컨테이너에 반환, 그리고 이는 파일로부터 내보낼 필요가 있음
// 컨테이너를 생성, 어플리케이션 스테이트가 바뀔 때 마다, 스테이트 함수 안의 객체가 컴포넌트의 props로 할당
