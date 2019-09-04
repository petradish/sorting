describe('Bubble Sort', function(){
    beforeEach(()=>{
      spyOn (Array.prototype,'sort').and.callThrough();
    })
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single value array', function(){
      const array= [1];
      expect( bubbleSort(array) ).toEqual([1]);
    });
    it('handles a binary array,swaps two values in place', function(){
      const array1= [1,2];
      const array2=[2,1]
      expect( bubbleSort(array1) ).toEqual([1,2]);
      expect( bubbleSort(array2) ).toEqual([1,2]);
    });
    it('handles larger arrays', function(){
       const array= [1,2,5,8,3,0];
       expect( bubbleSort(array) ).toEqual([0,1,2,3,5,8]);
    });
    it('tracks that array.sort has not been used', function(){
      const array= [1,2,5,8,3,0];
      bubbleSort(array);
      expect(Array.prototype.sort.calls.any()).toBe(false);
   });
   });