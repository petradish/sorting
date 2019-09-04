describe('Split', function(){
    it('splits an array into two halves', function(){
        expect( split( [1,2,3,4,5,6] ) ).toEqual( [[1,2,3],[4,5,6]] );
        expect( split([1,2,3,4,5,6])[0].length).toEqual(3)
    });
    it('returns the two sub-array halves within a single array', function(){
        expect( split( [1,2,3,4,5,6] ) ).toEqual( [[1,2,3],[4,5,6]] );
        expect(split([1,2,3,4,5,6]).length).toEqual(2);
    });
    it('can handle odd-lengthed arrays by making the first subarray the longer, even-lengthed array', function(){
        expect( split( [1,2,3,4,5,6,7] ) ).toEqual( [[1,2,3,4],[5,6,7]] );
        expect( split([1,2,3,4,5,6,7])[0].length).toEqual(4)
    });
})

describe('Merge', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( merge( [1,2,3],[4,5,6]) ).toEqual( [1,2,3,4,5,6] );
        expect( merge( [1,2,3],[4,5,6]).length).toEqual(6)

    });
    it('can merge odd-lengthed sub-arrays', function(){
        expect( merge( [1,2,3,4], [5,6,7] ) ).toEqual( [1,2,3,4,5,6,7] );
        expect( merge( [1,2,3,4], [5,6,7]).length).toEqual(7)
    });
    it('merges two sorted arrays into one sorted array', function(){
        expect( merge( [1,2,8,9], [0,6,7,10] ) ).toEqual( [0, 1, 2, 6, 7, 8, 9, 10] );
    });
})

describe('Merge Sort', function(){
    beforeEach(()=>{
      spyOn (Array.prototype,'sort').and.callThrough();
    //   spyOn ('split').and.callThrough();
    //   spyOn ('merge').and.callThrough();
    })
    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });
    it('handles a single value array', function(){
      const array= [1];
      expect( mergeSort(array) ).toEqual( [1] );
    });
    it('handles larger arrays', function(){
       const array= [1,2,5,8,3,0];
       expect( mergeSort(array) ).toEqual( [0,1,2,3,5,8] );
    });
    it('tracks that array.sort has not been used', function(){
      const array= [1,2,5,8,3,0];
      mergeSort(array);
      expect(Array.prototype.sort.calls.any()).toBe(false);
   });
//    it('tracks that split and merge helper functions are called', function(){
//     const array= [1,2,5,8,3,0];
//     mergeSort(array);
    // expect(split.calls.any()).toBe(true);
    // expect(merge.calls.any()).toBe(true);
//  });
});