// In this kata, your task is to draw the stereoscopic graphics of building blocks.
//We define a single block graph is:
// ..+---+
// ./   /|
// +---+ |
// |   | +
// |   |/.
// +---+..

// As you can see, + represents the corners of block; | / and - represents the sides of block;
// . represents the background.
// The input is a 2D array of positive integers. It's always a n x m matrix.
// That is, your output should draw blocks n rows and m columns.
// The value of each element represents the height of block.

// height=1    height=2    height=3
//                          ..+---+
//                          ./   /|
//                          +---+ |
//         ..+---+            |   | +
// ./   /|                  |   |/|
// +---+ |                  +---+ |
// ..+---+     |   | +     |   | +
// ./   /|     |   |/|     |   |/|
// +---+ |     +---+ |     +---+ |
// |   | +     |   | +     |   | +
// |   |/.     |   |/.     |   |/.
// +---+..     +---+..     +---+..
//
// matrix=     matrix=     matrix=
//     [[1]]        [[2]]       [[3]]


function draw(m){
    var h=m.length,w=m[0].length,mh=0,mw=w*4+1+h*2
    for (var i=0;i<h;i++)for (var j=0;j<w;j++){
        var t=m[i][j]*3+3+(h-1-i)*2
        if(t>mh) mh=t
    }
    var r=[...Array(mh)].map(x=>Array(mw).fill(".")),left=(h-1)*2,bot=mh-(h-1)*2-1,
        one=[
            "..+---+",
            "./   /|",
            "+---+ |",
            "|   | +",
            "|   |/.",
            "+---+.."]
    for (var i=0;i<h;i++,bot+=2)
        for (var l=left-i*2,j=0;j<w;j++,l+=4)
            for(var n=m[i][j],b=bot-5;n>0;n--,b-=3)
                for (var x=0;x<6;x++)
                    for(var y=0;y<7;y++)
                        if (one[x][y]!=".")
                            r[b+x][l+y]=one[x][y]
    return r.map(x=>x.join``).join`\n`

}

