import React from "react";

interface Skill {
  image: string;
  title: string;
  description: string;
}

const SkillsInfo: React.FC = () => {
  const skills: Skill[] = [
    {
      image:
        "data:image/png;base64,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",
      title: "JavaScript",
      description:
        "A popular programming language that is mainly used to create interactive web pages.",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "TypeScript",
      description:
        "A JavaScript extension that adds optional static types and other advanced features.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAC1CAMAAAAtOkCzAAAAY1BMVEX///8UnsoAmsgAmMcAlsYAnMkAlMUAksT6/f7m8vj0+fzq9fng7/a83ezM5fDV6vOCwt2fz+RMrdKLxt82pc50u9kvoMup0+ay2Olks9WTyeBouNh+vNpZstWLwt1CqdAAjMIwXHGKAAAO3UlEQVR4nN1dabujKgyuQNz3pVpb6/3/v/JqWzYFxdaec8Z8mHmmo5FACEl4A6fTm+T6fhhHTdNEief77rtsHoy8J6M4/IjRO+QnUVXajkNGGv7qq3poxRt8wriuesIY2WUVJW/weZOC5mbZGCxOgAnu702yjU/S3HtCJEYI29atCb7T7illF8DWnBBG/a0x7k4/uvXDKwpGGC7ZN9v/ovACCBSff8iCrLw1EsVv8/FpNQFCl42Du51q0EnxbAMATlcnrJtiWONTf1UMv7AXv/8gYmeLSh5kxF5lAnbxxUnvV+steIhS1p6Oh1eXZkzs6muSuBWZdZx6gAB3GtWoO6x5ZfYzqb61qNwlOYDYDhn/cmxF2xDcFPM1ucF8hgMeGA0cBkZEYkTu35GjFq0VOFYRB/5IXtzmjjM1ZYDOs0Gpz9N+B+Q4eRt7D0ZBXFiO+A30lRkfn/k3EHST/k6q81Q7wMlD8ZEwdyYPgHWupnw6YczgHO8vR3DBvAF5NH/Ajap+MiwIR2zC+tFk9QPcV5FiFkQ57xB83X+RrwU5Kg37JOtlLbdI+hqUMJUNBZA+0yx6QSVIsrty+VyxUKq3i0lWyqKg/KEdcS4PByl1YozfStnDcN7bBmfM+OPLolX0WiK1Gc6D45Sdpd8QabXrzEguV2N7b7fL4S1bezToJFEAV5Xs4ZJuVfP58/Y+7aeUUQ0HEq4/HfXSAGDJWUa9wlJMKWQKSvYdkp41qjV5PGjPGtcWnVsTQ+QWTPj+w6ZLFDM9KQ0G5PFGp/So7M5wZQhLpl17riUp5YpbU/8nKJy5HE5hui64LR0SSN9ttYLrhSpKad49bjT3WgxmB6WYDglatpKbKC6phm9ySL1OkgS6RZs7Ibd6o/PWqKYNgk0mxE9lQRYWUgVl7KP7re53qq/lllA6uE4sF9rkOSVUDfBu3jxrEeQb3vIvMwuMLhvGxM3hHfmXKKHrG1Qb3uoVOSO8ZVGoqCD9XimViPVoY/6SSo5tkjRshm0wdsscqX+CjLvG7wQ5xAQW7oy1K6Gvkb0EYaEINjW+fiW0naSp4DSiq6kkLvvsTmbLp34PWKZviO4uLk4n7jmNzrCpJBZQDvsEJUOzXm0wNVopX9Ph4dQMDgf/BZn6HNRsmYu+TAG1o/hq9kIhalLx+k3UtcKMzxVTbdzH/nrMoJs1IBOCMMS8/lbwvBwzB6Fgy9cW30ZPXv9qglmMEwnpHLHvCyGYN/MeaTQH/T6ChHTSEZNlREx/YWkIxRlvlLCiZt84CFohLohJjNqLckjm2hUl6Q3axgSx9hLkRfa6IK6Q9iG3ybLj3nhuC+Xra1LEgsydBTEYkZx3Or7Omupehf9et+UR+ZIg6yMihLdY5en6PGE1hL1r3PYfEdM50vBmolJpabySqx5esx3N3iNypn248uWYZz60ZkkwarAWwzb2vpPdo+2zl523MOcG69lG1w8CL3yQFwRPVAOL/8eFbrmBNRVEPbrbBWE+z2Jyzk8F61rm5VlJw3+wpyy8HMW3zMfbR5Cgo76WxttzfT/w4lTMyAGMO9Xjn+wX+oOYkLDT2Au0ABTaM2g9V2wmCA3Z0dxp9L0kjtprjxxHGRGu0fAe6q9tFCfefHD4d3dy42nPgBynenGT3bqS2BhpsRAGBICxjcsuzZpYViHqJKxooDEJrgUXIioGGYB8JIJECGEou1sRcWHof01cnfcFyagg6PlDVAwzFgYZ9hLiRTDytMo8fW0tslB3r50FnnwITmGWD6okTOK9aWCNsJ1n4SlgyYcNyZtFimjEB9fSMQCj7CEOccor/eqW3Pcisd0RPTJJbMOodRhjgkdUHGb0+Nf4b2Q2oBwUtttue5gbtP8lqWNjq+8uVVq0WV03EtV11hZpdel6C9u2Oc8VB8Cc4t5UnVAVJ0kSjouc7ypMjeuOSA0vHB6KK1NJoN9nRKZb5NI3rAmabwtj0XKPbPS9hVRIi03kBjU4GjlGRGBZdlnKf8KbfCJPyEakWVc+TLpGEgfq4IPFJMnOSiM1GEhc5lXRDMrrc58XbbT3GQc45MPaHTZFlZcYK9dYsM8LWIllituzcmcWExj8ieg5A92Cy7E1IShkiOG1eHtRdu+AKP02+9y+M1m8+wRV8pLCRhJYmQdKsH0bI2FWRAjE3DBuKmQrZAFS3jcbsHaGEXvSNZLcVA5+gm37i0/KmBrhi+iq+15UnRVfB1QaARYYRZpZB/mk12umfHDZLsfpdGG9NQ0/E43NR9jcgiXX6RRnGgAyl5CDuM5vRXEeD+GxrDUR04hpW+yrmQ772Xmin0AYs4kjKsCR3tyMqQX4lPQfzOUGazpX8TkzMCvJdYIZHcS4x1RhsQSe44kng3SbhnhKT0qbBXRTZvC07lNRAK0PSlNOZocNWeieKIZByie7XI3x2xuvCdfOXljyGKgGusGOZTBBHONy2bV3C3k1Aoyeo8jwWrZgyls+Uz8IfTg2DwSLFNNfn3sZfoZkRQFYChvDi7QCjsbu9XRIc6ECPIjn49AmlMmEPJqkETN2HBzkBPSXUu5k+6JdU5JcmuWkFEBJVEtRTueZK+SxPvLp2Da+xQsdfOqpAmHPBUUpKRiergWU4lKUA8NNdAhoHh1s2vk83ILPNiv9ivc0/aRHFwBp3zK+SSU4WJ1zjaVpTnIZXMwMFA2gfQaZgfOHEIuELSYsg1WzOSkNthvl4qAglSSSHOBMt7ZZF6GXoY256f0Y4saVlNoSpln2ZPb5hYSen0uSiMBQNMdq+AxE9t/zB4sNyBJ+1nW9qM6yOvJUASMjtoqjV2j2H2U+R3wkovs0A9x4AnYEQJWirGXd4kZzYftncP2GIH7MOtgOqiK9aeMr69OQswSUymEYlFrYp5wYTKFUB1nKei8GcXl4hz5/vNO1Lsx6EcmMSJ9pDWbHHxw/Tn1JUMJ4/Nbij9sS9Ip7PINr0yiVgJn7B1y9ZWIhXbBT59PiPIRznUcWs04eIQYBnf2aBcptBE9SHLRQ+KKtaxhboqyaYwgsbY1baikiAWRpHvdvzEfsvVNNnye66CMWVm7Ex5lHBeBoo8mI9gKquFCggRcHF3V2G9BFvdfBI03cnmgIDPqVNubGi0dCGf9NqygC+BXyJhcVQfXsZVZWRglf1HOe9w1nvwSwjQUEUkZbyJVgyae8s8eYk6WJ0xfL/DRleUL8zjbn0BK+tGEc6UxiqN7FEhdBt3g0r/lSph2PkTTYHN5PlP+CZp0kVPETGczzByhf3KvzFVG08oVwZRcOK61wMHsO+kUfLmAp0GfmImHdt5a+T6eCaBBkazlvpA4ni+k4rsH7OaCKJOLGGl7LgyTTLznKx2JFmYJMGhM/fY+sOaMM2jJuzvls5jqrm8CTMFhj5S9Kwyt1tbrLWrmjULnWnoCKDqV/8ug/9L4Go3oyJOoZUlqrpIYyTGYJWU/MMHvreAzwYemXQka+JAjJlKt0bRmQ0sy7srUj6+Ea02In4vBPMIAXVII9Ak3pwn1lqo+kMdtJKWglNgDiB2xhLk5sy9EEXpAIC52mSsk12YnSFNTwlMNAtkHcyaIkuJ5oJxhVT4kFuxqQUrA+18fZrvG4+JBgzSMSMcmhZ/ACg6k1UMOX3yli8UVGO6e6/U33xl42q4zg5ocLYvQiT51YmpzcR4KcMv6M0aaOSpB/fUQOM0eY1TKpUIn/sNU6zDoSscXxH1/ZD+NrHcb75fGIAnsp027xiEaLP4tH/k6EmH4WIR4hZn8VYR0gi/I0gofJax0m03ic3K+UjddKosvGa6bVLtl4bX1ELIy4kI0/zP7IRztWWhTKlh0rYen5aMdqsoeoqvNiftbWPURn/z1EARM33UOUd3UVHfH+rm68966ueIyd4hiFtX12aiX+1D77OmJghnxoZM0aB5jZmb+FfDgOFuU46KA/itcK6S/meC0Vgg7/VQQdWim8mmMa0b+IaTz9JsrU0aFMixnKFJscbOxn5TTC+xXcLzu+z5qe+WqG+x0oPAYS+8FFeer2z2Ljc1A2AW2sgdterbC1DGak7dUK523VCqdfrB/x960fOS1W9OR7V/TQVSGMsjTft6JnpNUaq+SzGituKgbHx/1ajdXpVfWmSeWOVW/nMher3sjGqjfOi1a9ab71adXbg+JczfzRALkOEdAWxlvqEHcqqTxGZeimWl3ManXv6lrdO63VNT9aYcdaXc7TuHoaPaunMZbKp4cf0S9WT0v17KrFZX8C+xv17OIJA179754woD7zwVq7eeMNGeiZD/F3znxQn8LR3i4lYJNJY0Y/cAqH7lyUQDgX5QMJYFQl8hPnoqyfVFPl2NGVva+Mg+PAj51U882zg4qfPDvoMKc5HeZ8LXbimW1+4hnSn3jGN29/+sSz45xBx6bmP38qoLEga+c0CnKYnNP4i4L88ZMzTefI6Y+fZUqN0b9+uuz75/1a8nm//HezkzT2Pu/3MCcwbz8TW8RX/KEzsQ9zSvlhzo1/5yR/4cYOwH/lJP/j3K3wS7ddcKzlXoIc5v6Rw9wIc5g7eo5za9Jh7rFiN4uthtniS6qbxcz74Ss3ix3mrrfj3L63/T5EFXz5oSjWr96HuP2GSnF6SDdUgtkNlcw72/mGyk/uDCV/6c5QAedG5mkekaa3uKLnLa6SAUP22i2uLDTb/RZX83t1ZRdLc68uNrxXF5W7323+hZuONeZIuul4rwPKBfYmd09PsG5/8u7pw9wGvnA/e/TZ/ey9eD+7iEaCHd1Fie6SmgNxHDJK5NhT9ORjzG6K2ZzcYL5QAradcaxGfhIj07TRZnKrWQmYZqsdcKfpzLpTSK3mRDa52ptosSxPbEJZa9cJry7NmGjK/HaSpDC4WoHY2aKtCTKyLgrYeyWzNFTrQG6v7wNoT6Xj5KYr+A/42jznFF60gL0xgZUrK81m5Le5HjMFCC1VIuxG2QVUOStEUH9rjPXBj249IipZMFz2drA0FDQ3y5bW6cGC4vzebMw/Jc09x0T2jLFdps0XlnMN+cngj5BnZd74V1/VSfiGsXTDpJ4wipLvTvJ5G3w/jKOmaaLE06JJDBl5yYNRHH7A6H9kyP9v+ATCrAAAAABJRU5ErkJggg==",
      title: "React",
      description:
        "A JavaScript library for building interactive and reusable user interfaces.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAAAD////6+vpmZmaioqJPT0+Hh4dSUlKbm5s9PT3u7u45OTnf398oKChxcXEUFBSysrIdHR3GxsbQ0NAODg59fX1gYGAjIyMwMDC/v78ZGRmpqalISEj09PRYWFiRkZGrvXuMAAACCUlEQVRIiZWX57rDIAiGiUk92Xt09/7v8mBWFdGk/OkTyxs/FYRAwFleyzBpmuKahLLOWRewh9oSiJXtMShiSi0WCz/owGbUA3a9mwPoOxcofZgyyYIiOeIAEmGDaXXModyUgukZTFlqguLUfMoqYYAn1rdZooOH+6mb/ILdLxxAt4O/cdBvoCfOeIsXUPzKAYgZPJzwntHDimeQ+g0yNJ4zFFYQHwW29tsCI5VHHLgQpxZBmu9RQJbNgSWCVKkCDRkhPv9RrwByFtR1sGAONQ9qYlmwBitMF1ATy4ISQjqE4OuBvvsfLBiClVCR0plqYlkwgYkFL+h884EF3FkQNLEsOEHDg5pYFmwcUgGeu1jHjJkDnI9ldIIJjC4QsLy9NpDGKh4HFwALqNJJxVXBgZINuXVXVIK9Yb7WLLBmg3w7+01sboM5m1YbeF3FXm2QT+Q92j7rhkZ0C0vm6tBBJXYuR1fi1DKXlQGqHX1QmbBcVvR6fBhZLLmzWK9HciGXZi3puNopzpQAYYuNTxWdNzo8zaGTZS6iYr9lLhi8JJ5JpD0Oeim3kku3yqj1RikPhLenCjWxvdk8HLQr9VcsaVeQ9M6Zr6uxGyRU61vnhM0v/mRMS3awt6WKk0FzNttO7zKF0Sefb3RT09NqrT889jlorZXdrGY+vNleDBjMnw9jVlTVlI2uz4d/zXIP8Yjt1AEAAAAASUVORK5CYII=",
      title: "Next.js",
      description:
        "A React framework that allows server-side rendering and other useful features.",
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX////kTSbxZSnr6+sAAADkSR7pdVzrWSjIyMj39/fkRBTr8PDwXRbxYiPnp5r4u6f3sZnyek/pzcfkPwbwVwDj4+NVVVXnnI3lZEn97enAwMB6enq6urqnp6flak7jRhoiIiJqamroVCcWFhYuLi7iOADxXxvuXyjqfGXytar41tDwqJr1xLv65eHmXj398vDtlIP1l3frg27S0tLmWDT0iWTmhnPr39zzvbTpx8H52dL60MPul4b5w7Lmi3norqOSkpJERESUlJRQUFA/Pz9xcXHqURTycz71lnXscEz2oojq19T4tJ/5yLrzgVXs+vx+gb60AAALT0lEQVR4nO2de1vaWBDGgxKVgLY1WHW7Ne22UG+AWqpWLXYvra697Pf/NpsQAwnMDBnynpDy8P6zNg+c5Lfn5OTNzJyDZen0eznS88GxwaHyVuIT43qR/PjbeMsvks1Yzwf//E15jdkEJSx/Hjb8PnZ4jgjLy4NG3s4p4aCRl/Gj80QYXX0lcXCuCMthE6/nmPBzcGgteWy+CPvfeTPXhH9a1l8E9BwRln9fHj1SEMLym0gjl1Z51PAB8GVwjCJ89Xz0SFEICW3FPzokfJFoQmxhQWheC8KYFoTlN2/j3331av4Iy/E3pvLakHd+CONvvc+teezD+N+VOSUcWO6XFk+4liNfnPDtVqQMhNaX8K+/LYHw79dx/ZUfIXHJesLHV99liTCp178YYdjgS2uOCQOSf/p/zC1hJfra3BJaLz+H/51fwkgLwgUhSEPCN8QlM4RfEk1whCPN/DkjwuW1SO8HxwaH1irxj24NDifAYx+3mOP9Zt6v0XpvLbTQQgsttNBCCy200EK/oHb3Voqsvd3MhJ2GXWQ1Otk70SkVWU52QKs7awhRXQDhnj1rCkH2HoBwv9CE+wDCnjdrDEFeD0B4VOSpxjkCEB4UmvAAQHjszhpDkHsMIDwsNOEhgLBVaMIWgLBTaEKAabMsLOEfqxn1R4IQAWhhn4erSxm1Gm/NgxC2oaYGSmi3IYQrBSZcgRBibVtmwvh9CDFtlnUDNTVQQmcbQoi1bZkJ441BTBvatkEJIaYNbduwhAjThrZtWEKEaQuibUUifBdvDBFp81Up1EyTIHQqky8/jZCAmQkTpg0RaQu0gzQ1SEJ7B0QItW1QQoxps6wzpG3LSpgwbWcgwu2iEoJMm2VtICfTrITxtpwNEOFlYQkvQYSCbbMdrb7WtFpnCUGmTbJt9vmGVgdPtPqwzhJiTJtl7bK2zdmoaqU//UMzBpg0bdkTwI9iCb2b6rJSep+V6MMkIQpQIDzPgfAuTrhqhpAD9E1FDoS1JY6wBCNk08B2OwfCOkcISQCH4m2bY56wkyBMmLZzGOEJS9gwT9jiCW9ghHwa2L0wTniVIEwMIEQCOBRv29xvxgl/1FhClGmT4onuR+0wVRM+YQndaxjhFUvoXBonfNpkCa9ghKJtM014zxLiTJuQBna2jRP+ZE0bJgEcigOcwrapCZ+xhDhLY1ld1tSobZuaMD5GTaRHQ/G2bcc0YYW1pUDTJlXvdZWAakLetEGq9iLxts0zTSiYthMgodK2Id/xr3hLgzNtUhqYsm3V221eR091umejNKAEcCidbav2XDbU5n1t6iRE2jAJ4FA621bdFgKs2eKlCUKcaZPiiZRtq97mQthAxRID8Wlgj7Bt1Y9CXjwToYkE8KN4wh5BuJkPIRLQYp/4pG37ZorQUKQtEJsGpqNtQm0DjBCWAA7F2zabIhQSjpkIjZk2qXrPIQCr7RwIQVV7kfgnHGXbqsJKIhghLAEcSmnbzgwRxhuCmja9beNvRBgh1LRJaWDStgkriXCEqARwKJxtwxEiTZs22lYVSlKzEBqLtPmq8C/5VLRNsG0wQg9UtReJvWJ7X2fbshAaNG3Cogsy2nZh5j40FksMxFfvkdE2j11evrquUoIwYdpQVXuRznW2bW+H07/PVFrnCMGmTbJtDV20TXdaPpYINm1iPFGXJNXNgNd8LBFr2sQ0sC5JqiP8xKdHsaZNa9tghEJ6FGvaxHiiLkmqI3zIIwEcSkgD65KkOkKhpg1r2ixltA1GyKdHsZG2QOzzkLRtKELW0pRsOCFv23S1bTrCdY4QbtrERRfmCDt8Ahht2iyLD73okqQqwl0+PYpaajHUDW9MVbVtKsKrPKr2IqFsm4pQMG2opRZDoWybipA3bcCqvUjXINumIvyeR9VeJMG23RojFEwbNtIWaBdU26YivOdr2nBVe5E67H2os20qQr5qz4HbUpRtq6oI+aUWeNMmxRN3NhVq7TKizpm4DY2sAI6LXw1suwrVOVHnzGOpxVCgvfeYeOn6HXFK3rTZeNMm2TYI4U/ilLmaNtjeewxh85Q45XUeSy2GAm3iwhE+EKfM1bTBNnFhCGvfiVPmatok2wYh/EGcMsdIW6AWZosTjpDqlHt+fSzellpWRSCkkkw6wjp1ybxpa4DTo6H4maa7Ny7OIHCElM/kTRtig+RxsVsm23v/jeeYLpjblhulVKckPmHctElbJncJ672lI1wiTthhbakR0ybaNuotgvkoTag1bdiqvUh8oZNH1bYxIWSGkDJtwlILdAI4lG7RBVe9RxM274kTCpE2E6ZNrN7bJAiZQc0QUqZNWB+LTgCHwlTv0YSkaRPWx6ITwKGENDARbeMWXTCEn4gT5mza1NV7zM5EDCFl2k5Z02YglhiIr97zTghCJkhOE5KmjU8Ag6v2BuIJz9IvumAIqUDUHU9oBlCIJyoWXTCE1Pn4SBtmg+Rx6dLAF/S7iIKQj7ThE8Ch+DSwRxBWNYSkLeVNGz4BHIq3bY1xwOWqYqbRmjbk+ti4+Hgibdtch/jCOOF6s16nLI2wqQm6ai+SzrYtVy8ue92GMzK0RwibtfrdwzX5xp67aZtiixP/Rfjb7b7txiljhOu1+tLpDzZNlrtp09q2AeXy5sae63p2gtAfmrUPT0RrkmPVXiSdbUt05fLHm3Z4W64GdLXas6cTreVpngngULq1smOUF5fnpYbz1R+aD9dpXFeeVXuP4rdMTrfFSXBbbvQ+pc1P81V7qA2Sx8UBKrY4UdR5J+bcHCJtgRDVe6n/91f4SBt2fWxcykUX2QhnYNrE6r0tOKFg2kwkgEPpbFtGwhmYNkz1XmrCGZg2TPVeakLetBlJAIdCVO+lJpyBaRNt2+1/KRFTE+ZatReJX3RR6vYuA5MNI7x+SDzwDW2QPCYpDew5jZ3tzcmUKQhb33/Wa02B0BigsKykL9txS2eXF1WRcgJh58fpUn1kk/JR02YqlhhIBIy6sr39UehKgbDjD83RzqMI0SuA40r1y7l+V9r7t1xXcoT+0KzVm2OdR1gaQwngUMJ+F6OUje4J2ZUUoT8014mhyRACN0geF7/3HgHpuc7KxrfRrhwjvHp6xwxNjtBE1V4kbfWeP2C7veOLOGSCcPfThyY/NGOKN2ooARxqml+68Fw3/hgZEFb680oKujFCc6Zt6uq9/mPkce4JCVtPPgjzikxopGovUobqvegxEjwUTpupO48iNJMADiXYthTy5x57/+hZbeK8Mqa8TBvil3Ptr7rOIwhNJYBDZa9mn2rnj9wsjbBlcn6ExtKjobL/BFt2QpOmDbHoYirCHKr2ImlsG44wuXuSqQRwqOyLLrSE75I/xG3YtCEWXagIR+n6hOZiiYGyL7pITfhulW7AWAI4VPZFF6kIx4ZmnNCkaUP8cu5kQq7zHmVkqcVQ2X85VyaUOi8iNGraJkXbshFOpusTmgXMbkwZwglDMy7DhJltG0GYYmgOZTABHGql4WVjHCV8p6Drx/DMJYAfdXjTHqvkmpZQ1Xn9iM/ekdlnxaN2L88cd1rK1Wk7zy2dHBueRhO6OgoquaYlVMwrIZ2zf2D2MUiqc3xS0nflasqHQiR/aLaPzKVEJ6p1sO9OPWAnyp9XSr1chyatw+32dANWpguSArMYmrQ6x+dOphl2FM9pdG8OjVWvTanW0YqD6Mowz2oyJppBneubUrau9NzGTj6PvOm1ezBS9qzovEbpvADzShpdHe0o5x5/XnELNK+kUee4l3rA+p3XvpnhI296tQ6CuUem9OcVr7DzShpVRKPuzys5WWmz8o06MfcECfB8rbRZ+Ua9MZx7fDp3JlbarCrHJ92gKwMrvf1Lzitp5A/Y3Ifm/8v/wOysXxQKAAAAAElFTkSuQmCC",
      title: "HTML5",
      description:
        "The latest version of HTML, used to structure and present content on the web.",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "CSS3",
      description:
        "The latest version of CSS, used to stylize and style the presentation of content on the web.",
    },
    {
      image:
        "https://www.malwarebytes.com/wp-content/uploads/sites/2/2024/01/Joomla-logo.jpg",
      title: "Joomla!",
      description:
        "A content management system (CMS) that allows you to build complex and dynamic websites.",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "Git",
      description:
        "A widely used distributed version control system for collaborative software development.",
    },
  ];

  return (
    <div className="bg-gray-900 p-10">
      <h1 className="text-white text-2xl font-bold mt-8 mb-14 flex justify-center">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

const SkillCard: React.FC<Skill> = ({ title, description, image }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center space-x-3">
        <img className="h-10" src={image} />
        <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default SkillsInfo;