(function ( window ) {

// 注意: 由于 核心模块应该首先执行, 因此在这里 myQuery 构造函数, I 函数等可以直接使用
var myQuery = window.myQuery,
    I = myQuery,
    arr = [],
    push = arr.push;

function parseHTML ( htmlStr ) {
    var rest = [], i,
        div = document.createElement( 'div' ); 
    div.innerHTML = htmlStr; 
    for ( i = 0; i < div.childNodes.length; i++ ) {
        rest.push( div.childNodes[ i ] );
    }
    return rest
}
myQuery.parseHTML = parseHTML;


// 其他
myQuery.fn.extend({
    appendTo: function ( selector ) {
        var iObj = myQuery( selector ),
            // 准备一个空的新的 myQuery 对象( 容器 )
            iNewObj = myQuery(),
            tmp, // 存储临时的数据
            rest = [],
            len = iObj.length,
            i;

        this.each(function () {
            
            for ( i = 0; i < len; i++ ) {
                tmp =i == len - 1 ? this : this.cloneNode( true );
                iObj[ i ].appendChild( tmp );
                rest.push( tmp );
            }

        }); 

        push.apply( iNewObj, rest );


        return this.pushStack( iNewObj );
    },
    append: function ( selector ) {
        
    }


});




myQuery.extend({
    unique: function ( iObj ) {
        var tmp = [],
            newIOIbj = myQuery();
        for ( var i = 0; i < iObj.length; i++ ) {
            if ( tmp.indexOf( iObj[ i ] ) == -1 ) {
                tmp.push( iObj[ i ] );
            }
        }
        push.apply( newIOIbj, tmp );
        return newIOIbj;
    }
});



myQuery.fn.extend( {
    parent: function () {
        var iObj = myQuery();

        push.apply( iObj, this.map(function ( v ) {
            return v.parentNode;
        }));
        // 去除重复
        iObj = myQuery.unique( iObj );

        return this.pushStack( iObj );
    }
});




})( window );