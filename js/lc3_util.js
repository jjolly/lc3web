window.LC3Util = {

    /*
     * Converts a number to a four-digit hexadecimal string with 'x' prefix.
     */
    toHexString: function(value) {
        var hex = value.toString(16).toUpperCase();
        var padLength = 4;
        if (hex.length < padLength) {
            hex = (Array(padLength - hex.length + 1).join('0')) + hex;
        }
        return 'x' + hex;
    },

    /*
     * Converts a number possibly outside the [-32768, 32767] range
     * to a 16-bit signed integer.
     */
    toInt16: function(n) {
        n = n & 0xFFFF;
        if (n & 0x8000) {
            return n - 0x10000;
        }
        return n;
    },

    /*
     * Sign-extends a size-bit number n to 16 bits.
     */
    signExtend16: function(n, size) {
        var sign = (n >> (size - 1)) & 1;
        for (var i = size; i < 16; i++) {
            n |= (sign << i);
        }
        return n;
    },
};