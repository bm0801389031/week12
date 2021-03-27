Test.assertEquals(lovefunc(1,4), true)
Test.assertEquals(lovefunc(2,2), false)
Test.assertEquals(lovefunc(0,1), true)
Test.assertEquals(lovefunc(0,0), false)
Test.describe("lovefunc", function(){
  Test.it("should work for random numbers", function(){
    var i, flower1, flower2;
    for(i = 0; i < 100; ++i){
      flower1 = (Math.random() * 1000) | 0;
      flower2 = (Math.random() * 1000) | 0;
      Test.assertEquals(lovefunc(flower1, flower2), (flower1 + flower2) % 2 === 1, "didn't work for flowers with " + flower1 + " and " + flower2 + " petals");
    }
  });
});
