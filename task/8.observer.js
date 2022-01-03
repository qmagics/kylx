class Subject {
    constructor(name, initialState) {
        this.name = name;
        this.state = initialState;
        this.observers = [];
    }

    attach(o) {
        this.observers.push(o);
    }

    detach(o) {
        this.observers = this.observers.filter(i => i !== o);
    }

    setState(newState) {
        const oldState = this.state;

        this.state = newState;

        this.observers.forEach(o => o.update(this, newState, oldState));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    observe(s) {
        s.attach(this)
    }

    unobserve(s) {
        s.detach(s);
    }

    update(s, newState, oldState) {
        console.log(`${this.name}：${s.name}的状态由 ${oldState} 变成 => ${newState}`);
    }
}


// 创建两个被观察者
const s1 = new Subject('宝宝', '很开心');
const s2 = new Subject('狗狗', '睡觉中');

// 创建两个观察者
const o1 = new Observer("我");
const o2 = new Observer("媳妇");

// 我观察了宝宝和狗
o1.observe(s1);
o1.observe(s2);

// 媳妇只关注宝宝
o2.observe(s1);

setTimeout(() => {
    // 宝宝饿了 => 我和媳妇都收到了通知
    s1.setState('饿了');

    // 狗狗醒了 => 只有我收到了通知
    s2.setState('醒了');
}, 1000);

setTimeout(() => {
    // 我现在不关注狗狗了
    o1.unobserve(s2);

    // 狗狗睡着了 => 我没收到通知
    s2.setState('睡觉中');
}, 2000);