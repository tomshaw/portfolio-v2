// ==========================================================================
// AspectRatio
// ==========================================================================

class AspectRatio {

    constructor(selector, padding = true) {
        this.selector = selector;
        this.padding = padding;
    }

    init(callback) {
        
        const instances = document.querySelectorAll(this.selector);
        const filter = Array.prototype.filter;

        if (!instances.length) {
            return callback();
        }

        let todo = filter.call(instances, (obj) => {
            return new Promise((resolve, reject) => {
                this.process(obj, obj.children, err => err ? reject(err) : resolve());
            });
        });

        Promise.all(todo).then(() => {
            setTimeout(() => {
                return callback();
            }, 1e3)
        });
    }

    process(parent, children, callback) {

        let type = this.loadTagName(children);

        if (type === 'img') {

            const img = new Image();
            
            img.onload = () => {
                let width = img.width;
                let height = img.height;
                if (this.padding === true) {
                    this.adjust(parent, width, height);
                }
                return callback();
            }

            img.src = children[0].src;

        } else {
            let width = 1920;
            let height = 1080;
            if (this.padding === true) {
                this.adjust(parent, width, height);
            }
            return callback();
        }

    }

    loadTagName(children) {
        for (let i = 0, total = children.length; i < total; i++) {
            let tagName = children[i].tagName.toLowerCase();
            if (tagName === 'img' || tagName === 'video') {
                return tagName;
            }
        }
    }

    adjust(el, width, height) {
        let ratio = this.commonDivisor(width, height);
        let aspectRatio = height / ratio * 100 / (width / ratio);
        el.style.paddingBottom = aspectRatio + "%";
    }

    commonDivisor(width, height) {
        return 0 === height ? width : this.commonDivisor(height, width % height)
    }
}

export default AspectRatio;
