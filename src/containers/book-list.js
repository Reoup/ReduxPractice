import React, {Component} from 'react'; // 컴포넌트
import { connect } from 'react-redux'; // react와 redux를 연결해줌

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li> // 해당 키는 유니크한 값이어야 하기 때문
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

export default connect(mapStateToProps)(BookList); // connect 함수는 이 컴포넌트를 가져오고 mapStateToProps 를 가져와, 컨테이너에 반환, 그리고 이는 파일로부터 내보낼 필요가 있음
// 컨테이너를 생성, 어플리케이션 스테이트가 바뀔 때 마다, 스테이트 함수 안의 객체가 컴포넌트의 props로 할당
