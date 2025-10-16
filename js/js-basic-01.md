Day01. 자바스크립트 기초 문제

1.  C) const a = 1

2.  undefined

3.  1번 줄, 변수가 초기화되기 전에 접근해서 TDZ 오류 발생

    TDZ : TDZ는 변수가 선언되고 초기화되기 사이의 사각지대이다.

    변수의 선언단계와 초기화단계가 동시에 실행되어 TDZ가 존재하지 않기 때문에

    호이스팅이 일어나는 것이다.

    초기화 단계에 오면 TDZ 상태가 해제된다.

4.  obj.n = 2;

5.  C) 2nd

6.  3

7.  B) `Hello, ${"JS"}!`

8.  3

9.  "hello"

10. "hi"

11. ['a', 'b', 'c']

12. true

13. 'bat'

14. true, false

15. odd

16. B) ===

17. "DONE"

18. Ann

19. 100

20. false

21. [1, 2, 3, 4]

22. 마지막 위치에 있는 요소

23. 1,2번째에 있는 요소 반환 / 2, 3 - arr = [1, 2, 3, 4]

24. [1, 3, 4]

25. [2, 4, 6]

26. [2, 4]

27. true

28. 6

29. 0 1 2

30. 반복가능한 속성을 가지는 컬렉션에 사용하기 적합

31. 열거가능한 속성의 키를 임의의 순서로 순회(객체의 속성 이름을 알아내야 할
    때)

32. 6

33. H i

34. of

35. for (const color of colors) {

        console.log(color);

    }

36. for (const char of str) {

        console.log(char);

    }

37. const sum = scores.reduce((acc, cur) => acc + cur);

    console.log(sum);

    const avg = sum / scores.length;

    console.log(avg);

38. for (const num in nums) {

        if (num < 3) {

            console.log(nums[num]);

        }

    }

39. for (const num in user) {

        console.log(num + " : " + user[num]);

    }

40. arr.forEach(function(num) {

        console.log(num);

    });

41. 키와 값이 한 쌍으로 이루어진 컬렉션

42. 중복되지 않은 값들의 집합

43. 123

44. 3 : 중복 허용 X

45. size
