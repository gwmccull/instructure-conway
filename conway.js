var conway = [
    [0, 1, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];

playConway(conway);
//countNeighbors(1, 1, conway);
function playConway(conway) {
    console.log(conway);

    conway.map(function(curr, index, arr) {
        curr.map(function(item, innerIndex, simpleArr) {
            var neighbors = countNeighbors(index, innerIndex, conway);
            //console.log(neighbors)
            if (item) {
                if (neighbors < 2) {
                    item = 0;
                } else if (neighbors > 3) {
                    item = 0;
                }
            } else {
                if (neighbors === 3) {
                    item = 1;
                }
            }
        });
        //return;
    });

    playConway(conway);
}

function countNeighbors(firstIndex, innerIndex, conway) {
    var neighbors = 0;
    var startX = 0, startY = 0, endX = innerIndex, endY = firstIndex;
    //console.log("args", arguments);
    if (firstIndex) {
        startY = firstIndex - 1;
    }
    if (innerIndex) {
        startX = innerIndex - 1;
    }
    if (firstIndex < conway.length - 1) {
        endY = firstIndex + 1;
    }
    if (innerIndex < conway[0].length - 1) {
        endX = innerIndex + 1;
    }
    console.log("endY", endY)
    console.log("endX", endX)

    for (var i = startY; i <= endY; i++) {
        for (var j = startX; j <= endX; j++) {
            console.log(conway[i][j], i, j)
            console.log(i !== firstIndex, j !== innerIndex)
            if (conway[i][j] && !(i === firstIndex && j === innerIndex)) {
                neighbors++;
            }
        }
    }

    console.log("conway", firstIndex, innerIndex, conway[firstIndex][innerIndex])
    console.log("neigh", neighbors);
    return neighbors;
}