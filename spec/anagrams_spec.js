const anagrams = require("../lib/anagrams")

describe("anagrams", ()=> {
    it("should return [] when input is empty String", ()=> { //一个断言
        expect(anagrams()).toEqual([])
    })

    it("should return [a] when input is a", ()=> { //一个断言
        expect(anagrams("a")).toEqual(["a"])
    })

    it("should return [ab,ba] when input is ab", ()=> { //一个断言
        expect(anagrams("ab")).toEqual(["ab","ba"])
    })

    it("should return [abc,acb,bac,bca,cab,cba] when input is abc", ()=> { //一个断言
        expect(anagrams("abc")).toEqual(["abc","acb","bac","bca","cab","cba"])
    })

})