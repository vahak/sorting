describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  beforeAll(function () {
    spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('runs once when bubblesort runs', function () {
    bubbleSort.swap();
    expect(bubbleSort.swap.calls.count()).toEqual(1);
  });

});

// describe('Sort', function(){

//   beforeAll(function () {
//     spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
//   });

//   it('how many times swap is called', function () {
//     window.swap();
//     expect(window.swap.calls.count()).toEqual(3);
//   });

// });
