use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
    instruction::Instruction,
    instruction::AccountMeta,
};
use std::io;



fn main() {
    //println!("funcionando")
}

// declare and export the program's entrypoint
entrypoint!(processinstruction);

// program entrypoint's implementation
pub fn processinstruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    let mut input = String::new();
    // log a message to the blockchain
    msg!("Hello, world!");
    match io::stdin().read_line(&mut input){
        
        Ok(n) => {
            println!("klk");
        }
        Err(error) => println!("error {error}"),
    }

    // gracefully exit the program
    Ok(())
}


//get Walllet data


//get user data


//set trasaccion 

