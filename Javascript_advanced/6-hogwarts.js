#!/usr/bin/node
// create private function

class studentHogwarts {
    #privateScore = 0;
    #name = null;

    #changeScoreBy(points) {
        this.#privateScore += points;
    }


    setName(newName) {
        this.#name = newName;
    }
    rewardStudent() {
        this.#changeScoreBy(1)
    }
    penalizeStudent() {
        this.#changeScoreBy(-1)
    }
    getScore() {
        return this.#name + ": " + this.#privateScore;
    }
}

let harry = new studentHogwarts()
harry.setName("Harry")
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
console.log(harry.getScore())

let draco = new studentHogwarts()
draco.setName("Draco")
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
console.log(draco.getScore())
