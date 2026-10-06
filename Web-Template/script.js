const positions = ['pos-center', 'pos-right-top', 'pos-right-btm'];
        const cans = [
            document.getElementById('can1'),
            document.getElementById('can2'),
            document.getElementById('can3')
        ];
        let offset = 0;

        function rotateCans() {
            offset++; 
            cans.forEach((can, index) => {
                can.classList.remove(...positions);
                const posIndex = (index + offset) % 3;
                can.classList.add(positions[posIndex]);
            });
        }